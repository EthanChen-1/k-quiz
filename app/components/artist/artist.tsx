export type Artist = {
  artist: {
    name: string;
    gender: "male" | "female" | "mixed";
    tags: string[];
    song: { name: string };
  };
};

function Artist({ artist }: Artist) {
  const { name, gender, tags, song } = artist;
  return (
    <div className="text-center pt-12 pb-16">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p>{gender.toUpperCase()} group</p>
      <ul className="list-disc list-inside text-left">
        {tags.map((tag: string) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div>Most Popular Album: {song.name}</div>
    </div>
  );
}

export default Artist;
