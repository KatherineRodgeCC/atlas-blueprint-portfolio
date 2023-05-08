 * @return {React.ReactElement} The EntryHeader component.
 */
export default function LocationHeader({ title, image, date, author, className, summary }) {
  const hasText = title || date || author;
  return (
    <div className={cx(['entry-header', className])}
    style={{
      backgroundImage: `url(${image.src})`,
      width: '100%',
      height: '100%',
    }}>
      {hasText && (
        <div className={cx('text')}>
          {!!title && <Heading className={cx('title')}>{title}</Heading>}
          <p>{summary}</p>
        </div>
      )}
      {image && (
        <div className={cx('image')}>
          <div className="container">
            <FeaturedImage
              className='LocationImage'
              className='LocationImageTest'
              image={image}
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}