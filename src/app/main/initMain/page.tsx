import MainImage from '@/components/pages/main/HomeImage';
import ButtonList from '@/components/pages/main/ButtonList';

function maininit() {

    return (

        <main>
        <div style = {{
            overflowY:"auto"
        }}>
            
        <MainImage />

        <ButtonList />

        </div>
        </main>
    )
}

export default maininit