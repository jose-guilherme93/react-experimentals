import Image from "next/image"
import Link from "next/link"




export default function TransportWidget() {
    return (
        <>  
        
            <main className="main-content">
                <section className="container-wrapper">
                    <section className="section-bar">
                    <div className="bar"></div>
                    </section>

                    <div className="title-content">
                    <h2 className="">
                        Encontre <span className="">Boris</span> no local de partida
                    </h2>
                    <p>Chega em 3 minutos (800 metros)</p>
                    </div>

                    <div className="main-content">
                    <div className="images">
                        <Image
                        src="https://th.bing.com/th/id/OIP.8vJGTEEmQTkRw2rOjrBgnwAAAA?pid=ImgDet&rs=1"
                        alt="foto de perfil do usuário logado"
                        className="profile-photo" width={46} height={46}
                        />
                        <Image
                        src="https://th.bing.com/th/id/OIP.2ao8pzUp61EmdJLlV-JBRAHaD5?pid=ImgDet&rs=1"
                        alt="foto do modelo e cor do carro"
                        className="car-photo"
                        width={46} height={46}
                        />
                    </div>
                    <div className="car-info">
                        <h3>BCD0D19</h3>
                        <p>Honda Civic Roxo</p>
                    </div>
                    </div>

                    <footer className="footer">
                    <input placeholder="Enviar uma mensagem para Boris..." />
                    <div className="footer-buttons">
                        <button className="ph ph-phone"></button>
                        <button className="ph ph-shield-plus"></button>
                    </div>
                    </footer>
                </section>
            </main>
        </>
    )
}