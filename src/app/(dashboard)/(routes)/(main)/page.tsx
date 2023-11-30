export default function Home() {
  return (
    <div>
      {[...Array(100)].map((_, index) => {
        return (
          <div key={index}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            architecto!
          </div>
        );
      })}
    </div>
  );
}
