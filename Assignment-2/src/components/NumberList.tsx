const NumberList = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <ul>
        {numbers.map((number) => (
          <ul key={number}>
            <li className="text-white text-2xl font-medium">{number}</li>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
