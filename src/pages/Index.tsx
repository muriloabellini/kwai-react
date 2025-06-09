import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Gift } from 'lucide-react';
import { TextAnimate } from '../components/TextAnimate';

const Index = () => {
  const [textAnimationKey, setTextAnimationKey] = useState(0);
  const navigate = useNavigate();

  const handleValidateAccount = () => {
    navigate('/loading');
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] relative overflow-hidden flex flex-col">
      {/* Header laranja com texto animado */}
      <div className="bg-[#FF4906] py-6 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF4906] via-[#FF5722] to-[#FF4906] animate-pulse"></div>
        <div className="relative z-10">
          <TextAnimate 
            key={`text-animation-${textAnimationKey}`}
            animation="blurInUp" 
            by="character" 
            duration={3}
            startOnView={false}
            once={true}
            className="text-white font-bold text-lg font-inter"
          >
            Parabéns! Você foi selecionado!
          </TextAnimate>
        </div>
      </div>

      {/* Luzes laranjas animadas no fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-40 left-6 w-40 h-40 bg-[#FF4906] rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-12 w-28 h-28 bg-[#FF4906] rounded-full blur-2xl opacity-30 animate-bounce delay-500"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 py-8 max-w-sm mx-auto w-full">
        
        {/* Logo adicionado aqui */}
        <div className="text-center mb-4">
          <img
            src="/img/premio.png"
            alt="Logo"
            className="w-[120px] h-auto mx-auto object-cover"
          />
        </div>

        {/* Imagem do presente */}
        <div className="text-center mb-6">
          <img
            src="/img/gif.gif"
            alt="Presente animado"
            className="w-[200px] h-[200px] mx-auto object-cover rounded-2xl"
          />
        </div>

        {/* Texto principal */}
        <div className="text-center mb-3">
          <p className="text-black font-bold text-[24px] font-inter leading-tight mb-6">
            Valide sua conta para 
            <span className="text-[#FF4906] font-bold"> se tornar Nosso Parceiro</span>
          </p>
        </div>

        {/* Botão de validação */}
        <button 
          onClick={handleValidateAccount}
          className="w-full bg-[#FF4906] text-white font-semibold py-4 rounded-2xl font-inter text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-[#FF4906]/25 mb-8"
        >
          <div className="flex items-center justify-center space-x-2">
            <Gift className="w-5 h-5" />
            <span>VALIDAR CONTA</span>
          </div>
        </button>

        {/* Valor em destaque */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-[#FF4906]/20 to-[#FF4906]/10 rounded-2xl p-6 border border-[#FF4906]/30">
            <p className="text-gray-700 text-sm font-inter mb-2">
              Ganhe
            </p>
            <p className="text-[#FF4906] text-3xl font-bold font-inter">
              R$783,98
            </p>
            <p className="text-gray-700 text-sm font-inter mt-2">
              em suas primeiras missões!
            </p>
          </div>
        </div>

        {/* Texto informativo */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm font-inter">
            Você será recompensado por cada missão completada!
          </p>
          <p className="text-gray-600 text-xs font-inter mt-2">
            Valide agora mesmo antes que expire!
          </p>
        </div>
      </div>

      {/* Efeito de brilho adicional */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FF4906]/5 to-transparent"></div>
    </div>
  );
};

export default Index;