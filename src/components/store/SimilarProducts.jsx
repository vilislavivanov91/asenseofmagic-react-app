import React from 'react'
import SimilarProduct from './SimilarProduct'
import { Row, Col } from 'reactstrap'
import photo from './galina-n-200668-unsplash.jpg'

const images = [
  { src: photo, alt: 'someName', id: 1, available: true, info: 'Оп на продукта Описание на продукта,' },
  { src: photo, alt: 'someName', id: 2, available: false, info: 'Описание на продукта, Описание нкта Описание на продукта,' },
  { src: photo, alt: 'someName', id: 3, available: true, info: 'Описание на продукта, Описание на продукта Описани,' },
  { src: photo, alt: 'someName', id: 4, available: false, info: 'Описание на продукта, Описание на продукте на продукта,' },
  { src: photo, alt: 'someName', id: 5, available: true, info: 'Описание на проду продукта Описание на продукта,' },
  { src: photo, alt: 'someName', id: 6, available: true, info: 'Описание на продукта, Описание на продукта Описание на продукта,' },
  { src: photo, alt: 'someName', id: 7, available: false, info: 'Описание на продукта, Описаниеа,' },
  { src: photo, alt: 'someName', id: 8, available: true, info: 'Описание на продкта, Описание на продуктакта, Описание на продуктакта, Описание на продукта Описание на продукта,' }
]

function SimilarProducts (props) {
  const similarProductsElement = images.map(i => {
    return (
      <Col key={i.id} md={3} xs={6}>
        <div className='mb-4'>
          <SimilarProduct image={i} />
        </div>
      </Col>
    )
  })

  return (
    <div>
      <h4 className='ml-3 mb-4 text-info'>Similar Products</h4>
      <Row>
        {similarProductsElement}
      </Row>
    </div>
  )
}

export default SimilarProducts
