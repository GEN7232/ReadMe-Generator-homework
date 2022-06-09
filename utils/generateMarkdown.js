function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)"
  } else if (license === "Apache 2.0") {
    return "[![Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "BSD 3.0") {
    return "[![BSD 3.0](https://img.shields.io/badge/license-BSD%203.0-blue)](https://opensource.org/licenses/BSD-3-Clause)"
  } else {
    return "";
  }
}

function renderLicenseSection(license) {
  if (license === "MIT") {
    return "THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
  } else if (license === "Apache 2.0") {
    return "Unless required by applicable law or agreed to in writing, software distributed under the Licesnse is distributed 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License";
  } else if (license === "BSD 3.0") {
    return "THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE."
  } else {
    return "";
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.authors} \n
  ${renderLicenseBadge(data.license)} \n
  Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Report](#report)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  
  # Description
  ${data.description}
  # Installation
  ${data.license}
  # Usage
  ${data.usage}
  # License
  ${renderLicenseSection(data.license)}
  # Report
  ${data.report}
  # Contributing
  ${data.contribute}
  # Tests
  ${data.tests}
  # Questions
  ${data.username}
  ${data.contact}
`;
};

module.exports = generateMarkdown;
