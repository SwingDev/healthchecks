import { HealthStatus } from './HealthStatus'

export abstract class HealthCheck {
  public async check (): Promise<HealthStatus> {
    return this.doCheck()
  }

  protected abstract async doCheck (): Promise<HealthStatus>
}
