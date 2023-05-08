import className from 'classnames/bind';
import { Heading } from 'components';

import styles from './LocationHeader.module.scss';
const cx = className.bind(styles);
/**
 * A Page or Post entry header component
 * @param {Props} props The props object.
 * @param {string} props.title The post/page title.
 * @param {MediaItem} props.image The image node.
 * @param {string} props.className An optional className to be added to the EntryHeader.
 * @return {React.ReactElement} The EntryHeader component.
 */
export default function LocationHeader({ props, title, image, className, summary }) {
  const hasText = title || summary; 
  console.log(props.data); 
  return (
    <div className={cx(['entry-header', className])}
    style={{
      backgroundImage: `url(${image.sourceUrl})`,
      width: '100%',
      height: '100%',
    }}>
      {hasText && (
        <div className={cx('text')} id="Location-header-textbox">
          {!!title && <Heading className={cx('title')}>{title}</Heading>}
          <p className="location-subheader"></p>
          <div className="location-button-group-container">
            <a href="#">Overview</a>f
            <a href="#">Virutal Tour</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      )}
    </div>
  );
}