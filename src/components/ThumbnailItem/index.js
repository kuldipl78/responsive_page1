// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {eachImageDetails, imageTabId, key} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} =
    eachImageDetails

  const changeImage = () => {
    imageTabId(imageAltText, imageUrl)
  }
  return (
    <li className="imageItems">
      <button className="btn-Element" onClick={changeImage}>
        <img alt={thumbnailAltText} className="thumb-url" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ThumbnailItem
