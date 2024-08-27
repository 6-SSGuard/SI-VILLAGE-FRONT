import Link from "next/link"

function Eventbanner() {

    return (

        <main>

            <div className="w-full h-min-screen bg-blue-500">

                <div className="w-full h-30 bg-red-500 flex flex-row">

                    <Link href="/sign-in"></Link>
                    
                </div>
            </div>
        </main>
    )
}

export default Eventbanner