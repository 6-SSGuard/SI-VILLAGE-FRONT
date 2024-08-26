import MainImage from '@/components/main/HomeImage';
import ButtonList from '@/components/main/Category';
import Eventbanner from '@/components/main/EventBanner';

function maininit() {

    return (

        <main>
        <div style = {{
            overflowY:"auto"
        }}>
        <MainImage>
            
        </MainImage>

        <ButtonList />

        <Eventbanner/>
        </div>
        </main>
    )
}

export default maininit