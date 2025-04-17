import app from "./app";
import Config from "./app/Config";

async function connectDB() {
  try {
    app.listen(Config.PORT, () => {
      console.log(`Server is running on port ${Config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

connectDB();
