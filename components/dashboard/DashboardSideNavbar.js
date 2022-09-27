import Link from 'next/link';
import styles from '../dashboard/DashboardSideNavbar.module.css';
import {useRouter} from 'next/router';

import CollectionsSVG from '../../public/assets/dashboardSVG/collectionsSVG';
import OverviewSVG from '../../public/assets/dashboardSVG/overviewSVG';
import FriendsSVG from '../../public/assets/dashboardSVG/friendsSVG';
import FavoriteSVG from '../../public/assets/dashboardSVG/favoriteSVG';
import ReviewsSVG from '../../public/assets/dashboardSVG/reviewsSVS';
import StorySVG from '../../public/assets/dashboardSVG/storySVG';

export default function DashboardSideNavbar(props) {
  const router = useRouter()
  console.log(router.asPath);
  return (
    <nav className={styles.container}>
      {/* top list  */}
      <ul className={styles.link_container}>
        <li className={styles.links}>
          <Link href=''>
            <div className={styles.link_item}>
              <OverviewSVG className={styles.svg}/>
              <span>Overview</span>
            </div>
          </Link>
        </li>
        <li className={styles.links}>
          <Link href='/'>
            <div className={styles.link_item}>
              <CollectionsSVG className={styles.svg}/>
              <span>Collections</span>
            </div>
          </Link>
        </li>
        <li className={styles.links}>
          <Link href=''>
            <div className={styles.link_item}>
              <FavoriteSVG className={styles.svg}/>
              <span>Favourites</span>
            </div>
          </Link>
        </li>
        <li className={styles.links}>
          <Link href=''>
            <div className={styles.link_item}>
              <ReviewsSVG className={styles.svg}/>
              <span>Reviews</span>
            </div>
          </Link>
        </li>
        <li className={styles.links}>
          <Link href=''>
            <div className={styles.link_item}>
              <StorySVG className={styles.svg}/>
              <span>My Story</span>
            </div>
          </Link>
        </li>
        <li className={styles.links}>
          <Link href=''>
            <div className={styles.link_item}>
              <FriendsSVG className={styles.svg}/>
              <span>Friends</span>
            </div>
          </Link>
        </li>
      </ul>
      {/* settings  and logout list  */}
      <ul className={styles.link_container}>
      <li className={styles.links}>
          <Link href=''>
            <div className={styles.link_item}>
              <CollectionsSVG className={styles.svg}/>
              <span>Settings</span>
            </div>
          </Link>
        </li>
        <li className={styles.links}>
          <Link href=''>
            <div className={styles.link_item}>
              <CollectionsSVG className={styles.svg}/>
              <span>Log Out</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}


// export  async function getStaticProps(context){
//   const userId = context.params.userId;
//   return{
//     props: {
//       userId: userId
//     }
//   }
// }