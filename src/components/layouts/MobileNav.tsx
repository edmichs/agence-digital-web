'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Icons } from '@/components/Icons'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'
import { getProductCategories } from '@/actions/category'
import { CategoryType } from '@/types/types'
import _ from 'lodash'

interface MobileNavProps {
  categories : CategoryType[]
}

const MobileNav : React.FC<MobileNavProps> = ({categories}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  

  return (
    <div className='flex lg:hidden'>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant='ghost' size='icon'>
            <Menu />
            <span className='sr-only'>Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <div className='px-2 flex flex-col gap-4'>
            <Link
              href='/'
              className='flex items-center'
              onClick={() => setIsOpen(false)}
            >
              <span className='font-bold'>Logo</span>
              <span className='sr-only'>Home</span>
            </Link>
            <div className='text-sm'>
              <Accordion
                type='multiple'
                defaultValue={['item-1', 'item-2', 'item-3']}
                className='w-full'
              >
                <AccordionItem value='item-1'>
                  <AccordionTrigger>My Dashboard</AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-y-2 text-muted-foreground'>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/dashboard/orders'
                      >
                        Carts
                      </Link>
                     
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Home</AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-y-2 text-muted-foreground'>
                      <Link onClick={() => setIsOpen(false)} href='/products'>
                        Products
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/#categories'
                      >
                        Categories
                      </Link>
                     
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Categories</AccordionTrigger>
                 
                  <AccordionContent>
                    <div className='flex flex-col gap-y-2 text-muted-foreground'>
                      {
                        _.map(categories, (category : CategoryType, index :  number) => {
                          return (<Link key={index}
                            onClick={() => setIsOpen(false)}
                            href={`/products?category=${category.slug}`}
                          >
                            {category.name}
                          </Link>)
                        })
                      }
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
