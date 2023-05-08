import className from 'classnames/bind';
import { Heading } from 'components';

import styles from './LocationHeader.module.scss';
const cx = className.bind(styles);
/**
 * A Page or Post entry header component
 * @param {Props} props The props object.
 * @param {string} props.title The post/page title.
 * @param {MediaItem} props.image The image node.
 * @param {string} props.date The post/page publish date.
 * @param {string} props.author The post/page author's name.
 * @param {string} props.className An optional className to be added to the EntryHeader.
 * @return {React.ReactElement} The EntryHeader component.
 */
export default function LocationHeader({ title, image, date, author, className, summary }) {
  const hasText = title || summary || date || author;
  console.log(image.sourceUrl);

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
          {!!summary && <p className='location-subheader'>{summary}</p>}
          <div className="location-button-group-container">
            <a href="#">Overview</a>
            <a href="#">Virutal Tour</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      )}
    </div>
  );
}