import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ImageMagnify from '@/components/cards/product-image-magnify'
import Image, { StaticImageData } from 'next/image'

interface Props {
  images: any[]
}

const ProductImage = (props: Props) => {
  return (
    <Tabs defaultValue={"0"} className="w-full h-full">
      <div>
      {
        props.images.map((pro, idx) => (
          <TabsContent key={idx} tabIndex={idx} value={idx.toString()} className="mb-4 w-full h-full" >
            <ImageMagnify src={pro.secure_url} />
          </TabsContent>
        ))
      }
      </div>
      <div className='w-full overflow-auto'>
        <TabsList className="h-full justify-start gap-2 p-0">
        {
          props.images.map((pro, idx) => (
            <TabsTrigger key={idx} value={idx.toString()}
              className="w-20 h-20 p-1 rounded-lg data-[state=active]:bg-primary/50"
            >
              <Image
                src={pro.secure_url} alt="product"
                width={40} height={40}
                className='w-full h-full rounded-lg transform transition-transform duration-300 ease-in-out'
                loading="lazy"
              />
            </TabsTrigger>
          ))
        }
        </TabsList>
      </div>
    </Tabs>
  )
}

export default ProductImage