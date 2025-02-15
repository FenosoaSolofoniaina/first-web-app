import { useState } from "react";



export function ShowImages({ dataImages}) {
    
    let [currentIndex, setCurrentIndex] = useState(0);
    
    return (
        <div className="images-container row">
            <div className="image-container col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12">
                {
                    dataImages.map(image =>
                        <img key={image.index} src={image.image.url} alt={image.alt}
                             width={image.image.width} height={image.image.height}
                             className={((currentIndex===image.index) ? 'd-block' : 'd-none')} />)
                }
            </div> 
            <div className="thumbnail-container col">
                {
                    dataImages.map(image =>
                        <button className="border border-none" onClick={ () => setCurrentIndex(image.index) }>
                            <img key={image.index} src={image.thumbnail.url} alt={image.alt}
                                 width={image.thumbnail.width} height={image.thumbnail.height}
                                 title={image.alt}
                                 className={
                                    "img-thumbnail " + ((currentIndex===image.index) ?
                                        "border border-secondary" :
                                        "border-none")
                                    }
                            />
                        </button>
                    )
                }
            </div>
        </div>
    );
}


export function ShowMainInformation() {

    let data = {
        title : 'Hello world',
        content : `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptates velit optio odit totam sint, explicabo voluptas non veniam culpa eum quaerat obcaecati suscipit,
                    esse expedita aut. Reiciendis unde sapiente tempore.`
    }
    
    return (
        <>
            <div className="fw-bold">
                <h1>{data.title}</h1>
            </div>
            <div className="fw-normal">
                <p>
                    {data.content}
                </p>
            </div>
        </>
    );

}


export function ShowDetails({ detailsData}) {

    let [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="accordion accordion-flush" id="page-details">
            {
                detailsData.map( (detail, index) => {
                    let [boldClass, showClass, expanded] = (currentIndex===index) ? 
                                                    ['fw-bold', 'show', true] :
                                                    ['', '', false]

                    return (
                        <div className="accordion-item" data-index={index}>
                            <h2 className="accordion-header">
                                <button className={"accordion-button " + boldClass} type="button" data-bs-toggle="collapse"
                                        data-bs-target={`#${detail.name}`} aria-expanded={expanded} aria-controls={detail.name}
                                        onClick={() => setCurrentIndex(index)} >
                                    {detail.title}
                                </button>
                            </h2>
                            <div id={detail.name} className={"accordion-collapse collapse " + showClass} data-bs-parent="#page-details">
                                <p className="accordion-body justify-start fw-normal">
                                    {detail.text}
                                </p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}