import { AppComponent } from './app.component';
import { render, screen } from '@testing-library/angular';

const sut = async () => {
  return await render(AppComponent)
}

describe('AppComponent', () => {
  it('should create the app', async () => {
    await sut()
    const app = screen.getByTestId('app-component')
    expect(app).toBeTruthy();
  });

  it(`should have the 'weather-app' title`, async() => {
    await sut()
    const title = screen.getByTestId('app-component-title')
    expect(title).toHaveTextContent('Weather App')
  });
});

