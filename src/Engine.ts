import Scene from "./Scene";

class Engine {
  private lastUpdate: number;
  private deltaTime: number;

  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  // TODO: Switch to renderer class
  private renderer: any;
  private scenes: Scene[];

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
    this.lastUpdate = 0;
    this.deltaTime = 0;

    // this.renderer = new Renderer(this.canvas, this.context);
    this.scenes = [];
  }

  public addScene(scene: Scene) {
    this.scenes.push(scene);
  }

  public getScene(scene: string) {}

  public start() {
    this.renderLoop(this.lastUpdate);
    // this.updateLoop();
  }

  private renderLoop(timestamp: number) {
    //   this.renderer.render(context);
    this.deltaTime = timestamp - this.lastUpdate;
    this.lastUpdate = timestamp;

    console.log(`[RENDER]: ${this.deltaTime}ms`);

    requestAnimationFrame(this.renderLoop.bind(this));
  }
}

export default Engine;
