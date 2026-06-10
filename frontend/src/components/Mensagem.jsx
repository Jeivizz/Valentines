import react from "react";

function Mensagem() {
    return (
        <div className="flex flex-col text-gray-500 gap-1 text-justify indent-5">
            <h1 className={"indent-0 italic"}>Pedro,</h1>
            <p>
                Mais um Dia dos Namorados juntos! Nem parece que já é o 5°, né?
                Ao longo desses quase 5 anos passamos por muita coisas, a maioria feliz,
                outras... nem tanto. Mas o importante é que passamos por tudo
                isso juntos, e nos reencontramos mesmo quando achamos que era o fim.
            </p>
            <p>
                Podem me chamar de cafona, mas a música que está tocando agora é como me sinto sobre a gente.
                E como me senti depois do show dele, quando estávamos separados e te mandei um áudio (vergonhoso)
                sobre como somos um{" "}

                <span className={"text-red-400 italic"}>"Alinhamento Milenar, você não acha?"</span>
                . Mas, que bom que eu estava certo
            </p>
            <p>
                Agora vivemos quase uma vida de casados, com nossa casa, nosso quarto, nossa cama.
                Embora você sempre pegue no meu pé sobre a louça na pia, ou para tirar o lixo,
                nada é melhor do que acordar no meio da noite e saber que você está do meu lado (Pelo ronco).
                Amo quando você cozinha pra mim, e os subtos desejos em olhar o iFood tarde da noite. Por muitos mais anos juntos,{" "}

                <span className={"italic"}>Feliz dia dos Namorados!</span>
            </p>

            <div className={"flex flex-col items-end"}>
                <h2 className={"text-end"}>Te amo muito,</h2>
                <p className={" italic"}>João Victor</p>
            </div>
        </div>
    );
}

export default Mensagem;

