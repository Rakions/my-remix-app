import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
  const url = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`, {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjY4NTA1ZTQyMzZmNTliNmQ4NTEyZGYyOGRkMGNkYSIsInN1YiI6IjY1NjkyMWFiNzFmMDk1MDBmZWI3ODQ5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iK-9Z2z_r1spf5OTztdc7hZ3E_vQUDOz-ydMGN3DLHI",
    },
  });

  return json(await url.json());
}

export default function MovieId() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1>Hello from id</h1>
    </div>
  );
}
