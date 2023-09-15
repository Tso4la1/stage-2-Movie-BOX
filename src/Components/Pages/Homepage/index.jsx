
import { BannerImg, FooterFiles, MovieGallery, NavBar } from '../../Organisms';


export const Homepage = () => {




    return (
        <div>
            <div>
                <BannerImg>
                    <NavBar />
                </BannerImg>

            </div>

            <div className="gap-x-4">
                <MovieGallery />
            </div>

            <div>
                <FooterFiles />
            </div>

        </div>


    )
}
