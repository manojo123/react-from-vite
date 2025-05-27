import { Puppy } from "../types";

export async function createPuppy(formData: FormData) {
  try {
    const response = await fetch("http://localhost:8000/api/puppies", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getPuppies() {
  try {
    const response = await fetch("http://localhost:8000/api/puppies");

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function toggleLikedStatus(id: Puppy["id"]) {
  try {
    const response = await fetch(
      `http://localhost:8000/api/puppies/${id}/like`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
