import { HealthCheck } from '../../src/base/HealthCheck'
import { HealthStatus } from '../../src/base/HealthStatus'

describe('HealthCheck', () => {
  describe('check', () => {
    it('should forward doCheck return value', async () => {
      const healthStatus = HealthStatus.up('I am healthy!')
      class DummyHealthCheck extends HealthCheck {
        protected async doCheck (): Promise<HealthStatus> {
          return healthStatus
        }
      }

      expect(await new DummyHealthCheck().check()).toEqual(healthStatus)
    })
  })
})
