import Image from 'next/image';
import Link from 'next/link';
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/outline';

const Header = () => {
  const session = false;

  return (
    <header>
      <div className="logoLinkContainer">
        <Link href="/">
          <div className="logoContainer">
            <Image
              src="https://rb.gy/vsvv2o"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>
      <div className="headerLinks">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
      <div className="headerActions">
        <SearchIcon className="headerIcon" />
        <Link href="/checkout">
          <div className="inCartItemsContainer">
            <span className="inCartItems">5</span>
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>

        {session ? (
          <Image
            src={
              // session.user?.image ||
              'https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png'
            }
            alt="profileImg"
            height={30}
            width={30}
            layout="fill"
            objectFit="contain"
            className="profileImg"
          />
        ) : (
          <UserIcon className="headerIcon" onClick={() => {}} />
        )}
      </div>
    </header>
  );
};
export default Header;
