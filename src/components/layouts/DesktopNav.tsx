import Link from 'next/link';
import { Icons } from '../Icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '../ui/NavigationMenu';
import { ListItem } from './ListItem';
import { getProductCategories } from '@/actions/category';
import { CategoryType } from '@/types/types';
import _ from "lodash"

interface DesktopNavProps {
  categories : CategoryType[]
}


const DesktopNav : React.FC<DesktopNavProps> = ({categories}) => {


  return (
    <div className='hidden lg:flex gap-x-8 items-center'>
      <Link href='/' className='flex space-x-2'>
        <span className='hidden font-bold lg:inline-block'>Logo</span>
        <span className='sr-only'>Home</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                
                <ListItem href='/products' title='Products'>
                  All the products we have to offer
                </ListItem>
                <ListItem href='/#categories' title='Categories'>
                  See all categories we have
                </ListItem>
                
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[900px] gap-3 p-6 md:w-[500px] md:grid-cols-4'>
              {
                
                _.map(categories, (category : CategoryType, index :  number) => {
                  return (<ListItem href={`/products?category=${category.name}`} key={index} title={category.name}>
                    Explore the {category.name} category
                  </ListItem>)
                })
              }
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNav;
