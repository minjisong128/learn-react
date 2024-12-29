function HeartIconBtn({ onClick, isFavorite = false }) {

  return (
    <button className="btn" onClick={(e) => onClick(e)}>
      <img className="btn__img" src={isFavorite ? '/img/heart-fill-icon.svg' : '/img/heart-icon.svg'} />
    </button>
  )
}

function LinkIconBtn({ link }) {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      <img className="btn__img" src="/img/link-icon.svg" alt="" />
    </a>
  )
}

export default function CourseItem({ title, description, thumbnail, isFavorite, link }) {

  function handleFavorite(e) {
    e.stopPropagation(); // 이벤트 전파(버블링) 멈춤
    alert(isFavorite ? '좋아요' : '모르겠어요');
  }

  function handleItemClick() {
    alert('item click~!');
    open(link, '_blank'); // 새 창으로 해당 링크로 이동. window.open(link, '_blank');로도 작성 가능.
  }

  return (
    // cf) 버블링이 아니라 캡처링 활용하고자 하면
    // onClick={handleItemClick} 대신 onClickCapture={handleItemClick} 활용 필요
    <article className="course" onClick={handleItemClick}>
      <img className="course__img" src={thumbnail} alt="강의 이미지" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
      <div className="course__icons">
        <HeartIconBtn isFavorite={isFavorite} onClick={handleFavorite} />
        {link && <LinkIconBtn link={link} />}
      </div>
    </article>
  );
}