# Mutations Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Project Structure

This Angular website utilizes the Angular Router to manage three main routes, each serving distinct components with specific functionalities.

### `/` (Main Webpage)

- **GenerateForm**: A form component that captures DNA dimensions. It communicates with another component via a service to initiate grid generation.
- **GridBuilder**: Subscribed to a service, this component dynamically constructs a grid with specified dimensions (X by Y).
- **DnaCard**: Acts as the fundamental building block of the grid. Represents a clickable card to toggle selected bases.
- **SubmitGenome**: Observes the current grid state, constructs a model from it, and sends a request to the backend to check for mutations. Updates a label based on the server's response.

### `/stats` (Statistics Page)

- **Stats**: Displays a table populated with data fetched from the backend, detailing the current count of mutations and non-mutations.

### `/list` (Information and Log List)

- **List**: Presents the last 10 valid database entries, showcasing the site's logic implementation and recent activity.

This structure enables efficient navigation and interaction within the website, leveraging Angular's powerful routing and component-based architecture for a responsive user experience.
