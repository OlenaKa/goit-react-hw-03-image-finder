import { Component } from "react";
import { searchPics } from "./fetchFn";
import "./App.css";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";
import Button from "./Components/Button";
import Modal from "./Components/Modal";

class App extends Component {
  state = {
    pictures: [],
    searchQuery: "",
    currentPage: 1,
    isLoading: false,
    scrollHeight: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }
  onSubmit = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      pictures: [],
    });
  };

  handleImageClick = (alt, largeUrl) => {
    this.setState({
      largeUrl: largeUrl,
      alt: alt,
    });
  };
  closeModal = () => {
    this.setState({
      largeUrl: "",
    });
  };

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    this.setState({
      isLoading: true,
      scrollHeight: document.body.scrollHeight - 150,
    });

    searchPics(searchQuery, currentPage)
      .then((data) => {
        this.setState((prevState) => ({
          pictures: [...prevState.pictures, ...data],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .finally(() => {
        this.scroll();
        this.setState({ isLoading: false });
      });
  };
  scroll = () => {
    window.scrollTo({
      top: this.state.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    const { pictures, isLoading, largeUrl, alt } = this.state;
    const renderLoadMoreBtn = this.state.pictures.length > 0 && !isLoading;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
        {pictures.length > 0 && (
          <ImageGallery
            items={pictures}
            handleImageClick={this.handleImageClick}
          />
        )}
        {isLoading && (
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        {renderLoadMoreBtn && <Button handleClick={this.fetchImages} />}
        {largeUrl && (
          <Modal src={largeUrl} alt={alt} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
