export type HealthStatusDetails = Error | string | object

export class HealthStatus {
  constructor (
    public readonly healthy: boolean,
    public readonly details?: HealthStatusDetails
  ) { }

  public static UP(details?: HealthStatusDetails): HealthStatus {
    return new HealthStatus(true, details)
  }

  public static DOWN(details: HealthStatusDetails): HealthStatus {
    return new HealthStatus(false, details)
  }
}
