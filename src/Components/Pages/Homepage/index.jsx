
import { BannerImg, FooterFiles, MovieGallery, NavBar } from '../../Organisms';


export const Homepage = () => {




    return (
        <div>
            <div>
                <BannerImg>
                    <NavBar />
                </BannerImg>

            </div>

            <div></div>
            <div className="gap-x-4 mt-8">
                <MovieGallery />
            </div>

            <div>
                <FooterFiles />
            </div>

        </div>


    )
}
