import Image from "next/image";

export default function Project() {
  return (
    <div className="grid grid-cols-2 gap-2 m-4">
        <div className="m-4 border p-4 transition ease-in-out group hover:brightness-75">
          <img className="mx-auto"
            src="https://placehold.co/300x200/white/black"
            width={500}
            height={300}>
          </img>
            <h1 className="mt-5 font-bold">Lorem Project 1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className="m-4 border-1 p-4">
          <img className="mx-auto"
            src="https://placehold.co/300x200/white/black"
            width={500}
            height={300}>
          </img>
            <h1 className="mt-5 font-bold">Lorem Project 1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        
        <div className="m-4 border-1 p-4">
          <img className="mx-auto"
            src="https://placehold.co/300x200/white/black"
            width={500}
            height={300}>
          </img>
            <h1 className="mt-5 font-bold">Lorem Project 1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        
        <div className="m-4 border-1 p-4">
          <img className="mx-auto"
            src="https://placehold.co/300x200/white/black"
            width={500}
            height={300}>
          </img>
            <h1 className="mt-5 font-bold">Lorem Project 1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
  );
}