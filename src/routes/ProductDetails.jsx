import { useState } from 'react';
import { Radio, RadioGroup } from '@headlessui/react';

const product = {
  name: `Gorra Verde 'The green Boston'`,
  price: '$50.000',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: '/green-cap.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: '/green-cap-right.png',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: '/green-cap-left.png',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: '/person-cap.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'Green', class: 'bg-green-500', selectedClass: 'ring-green-900' },
  ],
  description:
    '¡Un tributo a los campeones eternos! En Stitchers, celebramos la grandeza y la historia. Nuestra última creación, la Gorra Verde Stitchers, es un homenaje a uno de los equipos más legendarios en la historia del baloncesto: los Boston Celtics. Desde el parquet del TD Garden hasta los momentos más icónicos de la NBA, los Celtics han dejado una huella imborrable con su espíritu de lucha, su juego de equipo incomparable y su lista de campeonatos que inspiran respeto y admiración. Esta gorra verde no es solo un accesorio; es un símbolo de la excelencia y la tradición que los Celtics han personificado durante décadas.',
  highlights: [
    'Un verde vibrante que evoca los colores característicos del equipo, símbolo de su legado y pasión.',
    'Confeccionada con los mejores materiales, asegurando durabilidad y comodidad para todos los días.',
    'Detalles que capturan la esencia de los Celtics, desde el icónico trébol hasta toques sutiles que homenajean sus múltiples campeonatos.'
  ],
  details:
    'Con esta gorra, llevas contigo no solo un símbolo de moda, sino una pieza de historia. Ideal para los fanáticos de los Celtics y para aquellos que aprecian el espíritu ganador y la dedicación al deporte. Únete a nosotros en Stitchers y lleva en tu cabeza la pasión y el legado de los Boston Celtics. ¡Porque ser campeón no es solo ganar, es un estilo de vida!',
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Product = ({ description, highlights, details }) => (
  <div className="py-10 text-center lg:text-left lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pr-8">
    {/* Description and details */}
    <div>
      <h3 className="sr-only">Descripcion</h3>

      <div className="space-y-6">
        <p className="text-base text-gray-900">{description}</p>
      </div>
    </div>

    <div className="mt-10">
      <h3 className="text-sm font-medium text-gray-900">Aspectos</h3>

      <div className="mt-4">
        <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
          {highlights.map((highlight, index) => (
            <li key={index} className="text-gray-400">
              <span className="text-gray-600">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-10">
      <h2 className="text-sm font-medium text-gray-900">Detalles</h2>

      <div className="mt-4 space-y-6">
        <p className="text-sm text-gray-600">{details}</p>
      </div>
    </div>
  </div>
);

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="bg-white w-full">
      <div className="pt-6 flex flex-col items-center">
        
        {/* Image gallery */}
        <div className="w-full mx-full mt-6 max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-full max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 flex flex-col lg:row-span-3 lg:mt-0">
            <h2 className="sr-only text-black">Product information</h2>
            <h3 className="text-xl font-medium text-gray-900">Precio</h3>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

            <form className="mt-10 ">
              {/* Colors */}
              <div className='text-left'>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <fieldset aria-label="Choose a color" className="mt-4">
                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <Radio
                        key={color.name}
                        value={color}
                        aria-label={color.name}
                        className={({ focus, checked }) =>
                          classNames(
                            color.selectedClass,
                            focus && checked ? 'ring ring-offset-1' : '',
                            !focus && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                          )
                        }
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            'h-8 w-8 rounded-full border border-black border-opacity-10',
                          )}
                        />
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-500 py-3 px-8 text-base font-medium text-black hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Comprar
              </button>
            </form>
          </div>

          <Product
            description={product.description}
            highlights={product.highlights}
            details={product.details}
          />
        </div>
      </div>
    </div>
  );
}
