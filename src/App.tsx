import ImageCard from "./components/pages/Homepage/ImageCard/ImageCard"
import { imageData } from "./contents/imageData"


function App() {


  return (
    <>
     <div>
     {
        imageData?.map(image => <ImageCard key={image.id} imageInfo={image} />)
      }
     </div>
    </>
  )
}

export default App
