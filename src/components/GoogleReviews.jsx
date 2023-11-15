import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const GoogleReviews = () => {
  const reviews = [
    {
      id: 1,
      author: 'Jorge',
      rating: 5,
      comment: 'Excelente servicio, rápidos y profesionales. ¡Muy recomendados!'
    },
    {
      id: 2,
      author: 'Matias',
      rating: 4,
      comment: 'Servicio confiable y de alta calidad. Mi teléfono fue reparado en poco tiempo'
    },
    {
      id: 3,
      author: 'Lucas',
      rating: 5,
      comment: 'La mejor tienda de reparación de celulares en la zona. Rápidos y eficientes '
    },
    {
      id: 4,
      author: 'David',
      rating: 4,
      comment: 'Buen trato al cliente, presupuestos sin cargo, lo recomiendo'
    },
    {
      id: 5,
      author: 'Maria',
      rating: 5,
      comment:
        ' Me impresionó la rapidez con la que pudieron solucionar el problema de mi dispositivo'
    },
    {
      id: 6,
      author: 'Rocio',
      rating: 4,
      comment: '¡Muy satisfecho con el resultado!'
    },
    {
      id: 7,
      author: 'Lucia',
      rating: 5,
      comment: 'Rápidos, eficientes y a precios competitivos'
    },
    {
      id: 8,
      author: 'Elias',
      rating: 4,
      comment:
        ' Precios justos y transparentes, definitivamente regresaré si surge algún problema en el futuro.'
    }
  ]

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    className: 'display: flex, justify-content-center',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false
        }
      }
    ]
  }
  const renderStars = (rating) => {
    const stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span
          key={i}
          className="text-yellow-500"
        >
          &#9733;
        </span>
      )
    }
    return stars
  }
  return (
    <section className="relative bg-[#E2EEEE] p-10">
      <div className="container relative z-10 mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">¿Qué dicen nuestros clientes?</h2>
        <Slider
          {...sliderSettings}
          className="flex justify-center"
        >
          {reviews.map(({ id, author, rating, comment }) => (
            <div
              key={id}
              className="shadow-lg rounded-lg overflow-hidden mb-4 mx-4 flex-col items-center"
              style={{ margin: '10px' }}
            >
              <div className="px-6 py-4 flex flex-col box-border h-40">
                <div className="flex items-center mb-2">{renderStars(rating)}</div>
                <p className="text-gray-700">{comment}</p>
              </div>
              <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2">{author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default GoogleReviews
