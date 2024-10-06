import { useRef } from "react";

export default function FormularioContato() {

  const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
    
        const formData = {
          name: form.current.user_name.value,
          email: form.current.user_email.value,
          message: form.current.message.value,
        };
    
        console.log("Dados do Formulário:", formData);
    
        form.current.reset();
      };
  
    return ( 

        <>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-36 ml-96 pl-80">
        <div className="p-10 lg:p-8 md:p-20">
          <h1 className="font-krona font-semibold  text-2xl md:text-3xl mb-5 text-blue-950 font-bold text-center">
            Entre em contato! 
          </h1>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <label className="text-lg font-montserrat  font-medium">
              Nome
            </label>
            <input
              type="text"
              name="user_name"
              className="w-full p-2 px-3 border  font-montserrat font-medium border-blue-950 rounded-md focus:ring-2 focus:ring-fiap outline-none"
            />
            <label className="text-lg font-montserrat font-medium ">
              E-mail
            </label>
            <input
              type="email"
              name="user_email"
              className="w-full p-2 px-3 border font-medium border-blue-950 rounded-md focus:ring-2 focus:ring-fiap outline-none"
            />
            <label className="text-lg font-montserrat font-medium ">
              Mensagem
            </label>
            <textarea
              name="message"
              className="font-montserrat font-medium w-full p-2 px-3 border border-blue-950 rounded-md focus:ring-2 focus:ring-fiap outline-none h-36 resize-none"
            />
            <input
              type="submit"
              value="Enviar"
              className="text-white font-bold font-krona w-full p-3 mt-4 bg-blue-950 rounded-md cursor-pointer hover:bg-blue-800 transition-all duration-200 hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-black"
            />
          </form>
        </div>
      </div>
        </>
     );
}

