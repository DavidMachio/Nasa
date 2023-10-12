import "./Picture.css"

const Picture = ({data}) => {

  return (
    <main className="picture">
      
      <section className="section">
        <img src={data.url} alt={data.title} className="photo-of-day"/>
        
        <div className="description">
          <div className="title-photo">
            <h1 className="title">{data.title}</h1>
          </div>
          <div className="details-bar">
            <span>{data.date}</span>
            <span>{data.copyright}</span>
          </div>
          <div className="photo-description">{data.explanation}</div>
          </div>
      </section>
    </main>
  )
}

export default Picture;
//y donde esta la api key