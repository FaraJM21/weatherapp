function TopButtons(props) {
  const cities = [
    {
      id: 1,
      title: "London",
    },

    {
      id: 2,
      title: "Syndey",
    },

    {
      id: 3,
      title: "Paris",
    },

    {
      id: 4,
      title: "Tokyo",
    },

    {
      id: 5,
      title: "Tashkent",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6 ">
      {cities.map((city) => {
        return (
          <button
            className="text-white text-lg font-medium"
            key={city.id}
            onClick={() => props.setQuery({ q: city.title })}
          >
            {city.title}
          </button>
        );
      })}
    </div>
  );
}

export default TopButtons;
