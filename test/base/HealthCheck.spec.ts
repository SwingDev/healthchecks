import { HealthCheck } from '../../src/base/HealthCheck'
import { HealthStatus } from '../../src/base/HealthStatus'

describe('HealthCheck', () => {
  describe('check', () => {
    it('should forward doCheck return value', async () => {
      const healthStatus: HealthStatus = HealthStatus.UP('I am healthy!')
      class HealthyHealthCheck extends HealthCheck {
        protected async doCheck (): Promise<HealthStatus> {
          return healthStatus
        }
      }

      await expect(new HealthyHealthCheck().check()).resolves.toEqual(healthStatus)
    })

    it('should reject with error thrown by doCheck', async () => {
      const error: Error = new Error('Something bad happened!!!')
      class ThrowingHealthStatus extends HealthCheck {
        protected async doCheck(): Promise<HealthStatus> {
          throw error
        }
      }

      await expect(new ThrowingHealthStatus().check()).rejects.toEqual(error)
    })

    it('should reject with rejection done by doCheck', async () => {
      const rejectionReason: string = 'Uh oh'
      class RejectingHealthStatus extends HealthCheck {
        protected async doCheck(): Promise<HealthStatus> {
          return Promise.reject(rejectionReason)
        }
      }

      await expect(new RejectingHealthStatus().check()).rejects.toEqual(rejectionReason)
    })
  })
})
