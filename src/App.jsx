import './App.css'

export default function App() {
  return (
    <>
      <main>
        <div class="card">
          <div class="card__header">강의 목록</div>
          <div class="card__body">
            <div class="courses">
              <article class="course">
                <img class="course__img" src="./img/htmlcss.png" alt="" />
                <div class="course__body">
                  <div class="course__title">입문자를 위한, HTML&CSS 웹 개발 입문</div>
                  <div class="course__description">웹 개발에 필요한 기본 지식을 배웁니다. </div>
                </div>
              </article>
              <article class="course">
                <img class="course__img" src="./img/htmlcss.png" alt="" />
                <div class="course__body">
                  <div class="course__title">입문자를 위한, HTML&CSS 웹 개발 입문</div>
                  <div class="course__description">웹 개발에 필요한 기본 지식을 배웁니다. </div>
                </div>
              </article>
              <article class="course">
                <img class="course__img" src="./img/htmlcss.png" alt="" />
                <div class="course__body">
                  <div class="course__title">입문자를 위한, HTML&CSS 웹 개발 입문</div>
                  <div class="course__description">웹 개발에 필요한 기본 지식을 배웁니다. </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}