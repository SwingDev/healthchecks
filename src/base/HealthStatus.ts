export class HealthStatus {
  static up (details?: any): HealthStatus {
    return new HealthStatus(true, details)
  }

  static down (details: any): HealthStatus {
    return new HealthStatus(false, details)
  }

  constructor (
    public readonly healthy: boolean,
    public readonly details?: any
  ) { }
}
