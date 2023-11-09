export const loadData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("se terminó la petición");
  }
};


export const sendData = async (url, frontdata) => {
    try{
        const response = fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(frontdata),
        })

        if (response.ok) {
            const data = await response.json();
            return { status: 'success', data };
        } else {
            const errorData = await response.json();
            return { status: 'error', error: errorData };
        }
    }
    catch(error) {
        console.error("Ha ocurrido un error:", error);
        return { status: 'error', error: error.message };
    };
};

    // export const loadDataOld = async (url) => {
    //   const response = await fetch(url, {
    //     method: "GET",
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => console.error(error))
    //     .finally(() => console.log("se terminó la peticion"));
    // };