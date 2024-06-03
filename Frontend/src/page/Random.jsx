import React, { useEffect } from 'react'

function Random() {
    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        let totalImages = 0;

        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('card-visible');
                const smallImages = card.querySelectorAll('.small-image');
                totalImages += smallImages.length;

                smallImages.forEach((smallImage, imgIndex) => {
                    setTimeout(() => {
                        smallImage.classList.remove('hidden');
                        smallImage.classList.add('revealed');
                        totalImages--;

                        // Check if this is the last image being revealed
                        if (totalImages === 0) {
                            document.getElementById('next-button').classList.remove('hidden');
                        }
                    }, 5000 * (imgIndex + 1)); // Reveals small images with a 3-second interval
                });
            }, index * 1000);
        });
    }, []);
    return (
        <>
                <div className="container d-flex justify-content-center align-items-center min-vh-100 flex-column">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card text-center card-hidden">
                    <img src="https://fifafixture.rubyet.info/img/teams_logo/73.webp"
                        className="card-img-top rounded-circle mx-auto mt-3" alt="Person 1"/>
                    <div className="card-body">
                        <h5 className="card-title">Person 1</h5>
                        <div className="d-flex justify-content-between small-images">
                            <div className="small-image hidden">
                                <img src="https://fifafixture.rubyet.info/img/teams_logo/243.webp" alt="Small 1"/>
                                <p>Small Image 1 Description</p>
                            </div>
                            <div className="small-image hidden">
                                <img src="https://fifafixture.rubyet.info/img/teams_logo/243.webp" alt="Small 2"/>
                                <p>Small Image 2 Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card text-center card-hidden">
                    <img src="https://fifafixture.rubyet.info/img/teams_logo/73.webp"
                        className="card-img-top rounded-circle mx-auto mt-3" alt="Person 2"/>
                    <div className="card-body">
                        <h5 className="card-title">Person 2</h5>
                        <div className="d-flex justify-content-between small-images">
                            <div className="small-image hidden">
                                <img src="https://fifafixture.rubyet.info/img/teams_logo/243.webp" alt="Small 1"/>
                                <p>Small Image 1 Description</p>
                            </div>
                            <div className="small-image hidden">
                                <img src="https://fifafixture.rubyet.info/img/teams_logo/243.webp" alt="Small 2"/>
                                <p>Small Image 2 Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card text-center card-hidden">
                    <img src="https://fifafixture.rubyet.info/img/teams_logo/73.webp"
                        className="card-img-top rounded-circle mx-auto mt-3" alt="Person 3"/>
                    <div className="card-body">
                        <h5 className="card-title">Person 3</h5>
                        <div className="d-flex justify-content-between small-images">
                            <div className="small-image hidden">
                                <img src="https://fifafixture.rubyet.info/img/teams_logo/243.webp" alt="Small 1"/>
                                <p>Small Image 1 Description</p>
                            </div>
                            <div className="small-image hidden">
                                <img src="https://fifafixture.rubyet.info/img/teams_logo/243.webp" alt="Small 2"/>
                                <p>Small Image 2 Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button id="next-button" className="btn btn-primary mt-4 hidden">Next</button>
    </div>
        </>
    )
}

export default Random