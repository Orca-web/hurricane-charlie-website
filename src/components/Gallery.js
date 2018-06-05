import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import CallToAction from './CallToAction';

class Gallery extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const gallery = this.props.galleryData ? (
      this.props.galleryData.map(item => (
        <GalleryItem galleryItemData={item} key={item.id} />
      ))
    ) : null;

    return (
      <div>
        <section className="gallery">
          <div className="gallery-grid">
            {gallery}
          </div>
        </section>
        <CallToAction />
      </div>
    )
  }
}

export default Gallery