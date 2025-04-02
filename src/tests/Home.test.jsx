import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

test("Verifica que la página de inicio tenga el título correcto", () => {
  render(<Home />);
  expect(screen.getByText(/¡Bienvenido a Cat Facts!/i)).toBeInTheDocument();
});
