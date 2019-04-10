import { HealthStatus } from './HealthStatus'

export abstract class HealthCheck {
  protected abstract async doCheck (): Promise<HealthStatus>

  public async check (): Promise<HealthStatus> {
    return this.doCheck()
  }
}
