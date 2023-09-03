import React, { Dispatch, FC, SetStateAction } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import File, { FileInputType } from 'shared/ui/File'

import Modal from 'shared/ui/Modal/ModalWithSuspense'

interface FileInputCarouselProps {
  selectedImageIndex?: number
  setSelectedImageId: Dispatch<SetStateAction<string>>
  images: FileInputType[]
}

const FileInputCarousel: FC<FileInputCarouselProps> = ({
  images,
  selectedImageIndex,
  setSelectedImageId,
}) => (
  <Modal isCloseIconShow onClose={() => setSelectedImageId('')} isOpen={selectedImageIndex !== -1}>
    <Carousel
      infiniteLoop
      emulateTouch
      selectedItem={selectedImageIndex}
      useKeyboardArrows
      swipeable
      showThumbs={false}
      dynamicHeight={false}
    >
      {images.map((file) => (
        <File
          key={file.id}
          fileSrc={URL.createObjectURL(file.file as Blob)}
          isFileFromBE={false}
          mimetype={file.mimetype}
          name={file.name}
          size={file.size}
          className='file-input__file-modal'
        />
      ))}
    </Carousel>
  </Modal>
)
export default FileInputCarousel
