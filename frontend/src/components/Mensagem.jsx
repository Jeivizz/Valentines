import react from "react";

function Mensagem() {
    return (
        <div className="flex flex-col text-gray-500 gap-4">
            <h1 className={"self-start"}>Pedro,</h1>
            <p className={"text-justify"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget odio nec mauris lacinia imperdiet. Vestibulum eget blandit massa. Sed egestas pretium metus sed tempus. Etiam at lectus quis ligula dictum fermentum. Proin enim risus, malesuada ac dui quis, rhoncus luctus justo. Integer magna sem, vestibulum et tempus ut, ultricies sit amet sem. Curabitur tincidunt sit amet augue id ultricies. Sed sed lorem eu tellus egestas pulvinar.
            </p>

            <div className={"flex flex-col items-end"}>
                <h2 className={"text-end"}>Te amo muito,</h2>
                <p>João Victor</p>
            </div>
        </div>
    );
}

export default Mensagem;

