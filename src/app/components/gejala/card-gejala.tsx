const CardGejala = ({ gejala, onClick }: { gejala: any; onClick: () => void }) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-24 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      <img
        src={gejala.image}
        alt={gejala.name}
        className="w-16 h-16 mb-2 rounded-full"
      />
      <h3 className="text-lg font-semibold">{gejala.name}</h3>
    </div>
  );
}
export default CardGejala;